import { Office } from 'src/models/office';
import instance from '../instance';

const getAllOffice = async () => {
  //   const { data } = await instance.get('/office');
  const data: Office[] = [
    { offid: 1, offdesc: 'Office description 1' },
    { offid: 2, offdesc: 'Office description 2' },
    { offid: 3, offdesc: 'Office description 3' },
    { offid: 4, offdesc: 'Office description 4' },
    { offid: 5, offdesc: 'Office description 5' },
  ];

  return data;
};

const getOfficeById = async (id: number) => {
  //   const { data } = await instance.get(`/office/${id}`);
  const data: Office = { offid: id, offdesc: 'Office description' };
  return data;
};

export { getAllOffice, getOfficeById };
