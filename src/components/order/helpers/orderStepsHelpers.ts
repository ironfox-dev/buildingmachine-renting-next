import { NextRouter } from 'next/router';

const removeOrderStepsData = () => {
  localStorage.removeItem('orderStartDate');
  localStorage.removeItem('orderEndDate');
  localStorage.removeItem('orderLocation');
  localStorage.removeItem('orderServiceIds');
  localStorage.removeItem('orderBundleIds');
  localStorage.removeItem('orderPersonalData');
};

export const goToNextOrderStep = (router: NextRouter, id: string, pathname: string): void => {
  localStorage.setItem('orderProductId', id);
  localStorage.setItem('currentOrderStepPath', pathname);
  router.push(pathname);
};

export const startOrderCreationSteps = (productId: string, router: NextRouter): void => {
  const currentOrderStepPath = localStorage.getItem('currentOrderStepPath');
  const currentOrderProductId = localStorage.getItem('orderProductId');

  if (currentOrderStepPath && productId === currentOrderProductId) {
    router.push(currentOrderStepPath);
  } else if (productId !== currentOrderProductId || !currentOrderProductId) {
    removeOrderStepsData();
    localStorage.setItem('currentOrderStepPath', `/product/${productId}/machine`);
    localStorage.setItem('orderProductId', productId);
    router.push(`/product/${productId}/machine`);
  }
};

export const finishOrderCreationSteps = (): void => {
  localStorage.removeItem('currentOrderStepPath');
  localStorage.removeItem('orderProductId');
  removeOrderStepsData();
};
