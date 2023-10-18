export default {
  "@resize": {
    options: ["width", "height"],
  },
  ":root"({ data }, ...cate) {
    cate[0].title = "配置";
    cate[0].items = [
      {
        title: "图片地址",
        type: "text",
        value: {
          get({ data }) {
            return data.url;
          },
          set({ data }, val) {
            data.url = val;
          },
        },
      },
      {
        title: "填充方式",
        type: "select",
        options: {
          options: [
            {
              label: 'fit',
              value: 'fit'
            },
            {
              label: 'contain',
              value: 'contain'
            },
            {
              label: 'cover',
              value: 'cover'
            },
            {
              label: 'none',
              value: 'none'
            },
            {
              label: 'scale-down',
              value: 'scale-down'
            }
          ]
        },
        value: {
          get({ data }) {
            return data.fit ?? 'none';
          },
          set({ data }, val) {
            data.fit = val;
          },
        },
      },
    ];
  },
};
