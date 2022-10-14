import { WareHouse } from 'src/models/ware';

const getWareHouseById = async (id: number) => {
  //   const { data } = await instance.get(`/warehouse/${id}`);
  const data: WareHouse[] = [
    { offid: id, wareid: 1, blockid: 1, waredesc: 'WareHouse description' },
  ];
  return data;
};

export { getWareHouseById };
