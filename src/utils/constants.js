export const files = {
  file1Tables: [
    {
      tableName: 'users',
      columns: [
        'username',
        'password',
        'first_name',
        'last_name',
        'gender',
        'age',
        'phone_number',
        'bio',
        'time_zone',
        'recent_login_date',
        'recent_login_device',
        undefined,
        undefined,
        undefined
      ],
      key: 'username'
    },
    {
      tableName: 'roles',
      columns: [
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        'role_type',
        'role_description'
      ],
      key: 'role_type'
    }
  ]
  // file2Tables: [
  //   {
  //     tableName: 'users',
  //     columns: [
  //       'username',
  //       'password',
  //       'first_name',
  //       'last_name',
  //       'gender',
  //       'age',
  //       'phone_number',
  //       'bio',
  //       'time_zone',
  //       'recent_login_date',
  //       'recent_login_device',
  //       undefined,
  //       undefined,
  //       undefined
  //     ]
  //   },
  //   {
  //     tableName: 'roles',
  //     columns: [
  //       undefined,
  //       undefined,
  //       undefined,
  //       undefined,
  //       undefined,
  //       undefined,
  //       undefined,
  //       undefined,
  //       undefined,
  //       undefined,
  //       undefined,
  //       undefined,
  //       'role_type',
  //       'role_description'
  //     ]
  //   }
  // ]
};
