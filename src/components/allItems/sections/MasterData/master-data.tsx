import React, { useState, useEffect, memo } from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';

import { useProductLazyQuery } from '~/graphql/graphql';
import InfoCard from '../../InfoCard';
import InfoLine from '../../InfoLine';
import InfoCell from '../../InfoCell';

const BaseDataSection = ({ label }: { label: string }): React.ReactElement => {
  const router = useRouter();
  const { t } = useTranslation();

  const { id: currentProductId } = router.query;
  const [getProduct, { data: productdata }] = useProductLazyQuery();

  const [product, setProduct] = useState({ productionYear: 0, serialNumber: '' });

  useEffect(() => {
    if (productdata && productdata.product) {
      setProduct(productdata.product);
    }
  }, [productdata]);

  useEffect(() => {
    (async () => {
      if (currentProductId && getProduct) {
        await getProduct({ variables: { id: currentProductId as string } });
      }
    })();
  }, [currentProductId]);

  const handleChangeData = (name) => (value) => {
    setProduct({
      ...product,
      [name]: value,
    });
  };

  return (
    <InfoCard title={t(label)}>
      <InfoLine>
        <InfoCell
          label={t('fleet:construction_year')}
          value={product.productionYear}
          isNumber
          onChange={handleChangeData('productionYear')}
        />
        <InfoCell
          label={t('fleet:serial_number')}
          value={product.serialNumber}
          onChange={handleChangeData('serialNumber')}
        />
      </InfoLine>
    </InfoCard>
  );
};

export default memo(BaseDataSection);
