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
        value: {
          get({ data }) {
            return data.url;
          },
          set({ data }, val) {
            data.url = val;
          },
        },
      },
    ];
  },
};
