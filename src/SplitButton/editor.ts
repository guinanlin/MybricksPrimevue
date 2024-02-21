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
              label: "默认按钮",
              value: "default",
            },
            {
              label: "主按钮",
              value: "primary",
            },
            {
              label: "次按钮",
              value: "Secondary",
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
            {
              label: "反差按钮",
              value: "Contrast",
            },
          ],
        },
        value: {
          get({ data }) {
            return data.severity ?? 'default';
          },
          set({ data }, val) {
            data.severity = val;
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
      {
        title: '单击',
        type: '_Event',
        options: {
          outputId: 'onClick'
        }
      },
    ];
  },
};
