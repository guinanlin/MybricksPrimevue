export default {
  "@resize": {
    options: ["width", "height"],
  },
  ":root"({ data }, ...cate) {
    cate[0].title = "配置";
    cate[0].items = [
      {
        title: "按钮类型",
        type: "select",
        options: {
          options: [
            {
              label: "主按钮",
              value: "primary",
            },
            {
              label: "成功按钮",
              value: "success",
            },
            {
              label: "信息按钮",
              value: "info",
            },
            {
              label: "警告按钮",
              value: "warning",
            },
            {
              label: "危险按钮",
              value: "danger",
            },
          ],
        },
        value: {
          get({ data }) {
            return data.type;
          },
          set({ data }, val) {
            data.type = val;
          },
        },
      },
      {
        title: "文本",
        type: "text",
        value: {
          get({ data }) {
            return data.text;
          },
          set({ data }, val) {
            data.text = val;
          },
        },
      },
    ];
  },
};
