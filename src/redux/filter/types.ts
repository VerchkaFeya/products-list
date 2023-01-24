export type TSortParam = {
  name: string;
  sortProperty: string;
  nameEn: string;
};

export type TFilterSliceState = {
  sortParam: TSortParam;
  ascSort: boolean;
  searchValue: string;
};
