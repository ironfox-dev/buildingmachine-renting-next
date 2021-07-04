import * as Yup from 'yup';
import {
  useSaveServiceTemplateMutation,
  useUpdateServiceTemplateMutation,
  useDeleteServiceTemplateMutation,
} from '~/graphql/graphql';
import { ServiceTemplate, FormHocReturn } from '../helpers/interfaces';

const formHoc = (values: ServiceTemplate, isCreating: boolean): FormHocReturn => {
  const [saveServiceTemplateMutation] = useSaveServiceTemplateMutation();
  const [updateServiceTemplateMutation] = useUpdateServiceTemplateMutation();
  const [deleteServiceTemplateMutation] = useDeleteServiceTemplateMutation();

  const ValidationSchema = Yup.object().shape({
    name: Yup.string().required('Service Name is required'),
    pricingStructure: Yup.string().required('Pricing Structure is required'),
    description: Yup.string().required('Description is required').max(500),
  });

  const handleSubmit = async (payload: ServiceTemplate): Promise<void> => {
    const serviceTemplateInput = {
      locales: [{ name: payload.name, locale: 'de_DE', description: payload.description }], // TODO configure globale locale
      pricingStructure: payload.pricingStructure,
      default: payload.default,
      includingWeekend: payload.includingWeekend,
    };

    if (isCreating) {
      await saveServiceTemplateMutation({ variables: { serviceTemplateInput }, refetchQueries: ['ServiceTemplates'] });
    } else {
      await updateServiceTemplateMutation({
        variables: { id: payload.id, serviceTemplateInput },
        refetchQueries: ['ServiceTemplates'],
      });
    }
  };

  const handleDelete = async (payload: ServiceTemplate): Promise<void> => {
    await deleteServiceTemplateMutation({ variables: { id: payload.id }, refetchQueries: ['ServiceTemplates'] });
  };

  return {
    values,
    ValidationSchema,
    handleSubmit,
    handleDelete,
  };
};

export default formHoc;
