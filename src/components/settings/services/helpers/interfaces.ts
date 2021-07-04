import { Column } from 'material-table';
import { Scalars } from '~/graphql/graphql';

export interface FormHocReturn {
  values: ServiceTemplate;
  ValidationSchema: any;
  handleSubmit(payload: ServiceTemplate): void;
  handleDelete(payload: ServiceTemplate): void;
}

export interface ServiceTemplate {
  id: string;
  name: string;
  pricingStructure: string;
  default: boolean;
  description: string;
  includingWeekend: boolean;
}

export interface TableHocReturns {
  columns: Column<ServiceTemplate>[];
  actions: {
    icon: string;
    className: string;
    event: ({ rowDetails, isCreating }: { rowDetails?: ServiceTemplate; isCreating?: boolean }) => void;
  }[];
  isLoading: boolean;
  serviceTemplatesList: Scalars['JSONObject'];
  isModalOpen: boolean;
  values: { formValues: ServiceTemplate; isCreating: boolean };
  handleModalOpen({
    rowDetails,
    isCreating,
  }: {
    rowDetails?: ServiceTemplate | undefined;
    isCreating?: boolean | undefined;
  }): void;
  handleModalClose(): void;
}

export interface UpsertTypes {
  isModalOpen: boolean;
  data: {
    isCreating: boolean;
    formValues: ServiceTemplate;
  };
  handleModalClose(): void;
}
