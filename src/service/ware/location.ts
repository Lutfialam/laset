import { Location } from 'src/models/location';
import instance from '../instance';

const getAllLocation = async () => {
  //   const { data } = await instance.get('/location');
  const data: Location[] = [
    {
      locid: 1,
      locdesc: 'Location description 1',
      offid: 1,
      blockid: 1,
      wareid: 1,
    },
    {
      locid: 2,
      locdesc: 'Location description 2',
      offid: 1,
      blockid: 1,
      wareid: 1,
    },
    {
      locid: 3,
      locdesc: 'Location description 3',
      offid: 1,
      blockid: 1,
      wareid: 1,
    },
    {
      locid: 4,
      locdesc: 'Location description 4',
      offid: 1,
      blockid: 1,
      wareid: 1,
    },
    {
      locid: 5,
      locdesc: 'Location description 5',
      offid: 1,
      blockid: 1,
      wareid: 1,
    },
  ];

  return data;
};

const getLocationById = async (id: number) => {
  //   const { data } = await instance.get(`/Location/${id}`);
  const data: Location[] = [
    {
      locid: 1,
      locdesc: 'Location description',
      offid: 1,
      blockid: id,
      wareid: 1,
    },
  ];
  return data;
};

export { getAllLocation, getLocationById };
