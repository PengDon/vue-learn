import CommHeader from '../components/header';

export default {
  title: 'Example/Header',
  component: CommHeader,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { CommHeader },
  template:
    '<CommHeader :user="user" @onLogin="onLogin" @onLogout="onLogout" @onCreateAccount="onCreateAccount" />',
});

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {},
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
