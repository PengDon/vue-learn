import Toast from '../components/toast'

export default {
  title: 'Dialog/toast',
  component: Toast,
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Toast },
  template: '<Toast v-bind="$props"/>',
})

export const Example = Template.bind({})
Example.args = {
  mes: '要展示的内容',
  isFixed: false,
}

export const Example2 = Template.bind({})
Example2.args = {
  mes: '要展示的内容',
  timeout: 3000,
  isFixed: false,
}

export const Example3 = Template.bind({})
Example3.args = {
  mes: '要展示的内容',
  timeout: 4000,
  isFixed: false,
  callback: () => {
    this.toast({mes:'提示信息'})
  },
}