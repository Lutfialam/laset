export interface Stock {
  kdmitra?: string;
  offcode?: string;
  barid?: string;
  ibaid?: string;
  kdcif?: string;
  namacif?: string;
  desc?: string;
  imgbarang?: string;
  pdfbarang?: string;
  imgkemas?: string;
  descgroup1?: string;
  descgroup2?: string;
  descgroup3?: string;

  offid?: string;
  wareid?: string;
  blokid?: string;
  locid?: string;
  paid?: 0 | 1 | 2 | 3; // status [0, 1, 2, 3]
  crkdmitra?: string; // create awal
  croffcode?: string; // create awal
  crtrxid?: string; // create awal
  crtrxnorut?: string; // create awal
  refkdmitra?: string;
  refoffcode?: string;
  reftrxid?: string;
  reftrxnorut?: string;
  usercreate?: string;
  useredit?: string;
  tglcreate?: string;
  tgledit?: string;
  userloc?: string;
}
