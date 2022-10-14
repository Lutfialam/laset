import { Blok } from 'src/models/blok';

const getBlokById = async (id: number) => {
  //   const { data } = await instance.get(`/warehouse/${id}`);
  const data: Blok[] = [{ offid: id, blokid: 1, blokdesc: 'Blok description' }];
  return data;
};

export { getBlokById };
