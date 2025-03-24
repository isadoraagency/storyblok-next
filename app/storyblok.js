import {apiPlugin, storyblokInit} from "@storyblok/react/rsc";
import Grid from "../components/Grid";
import Teaser from "../components/Teaser";
import EventPage from "../components/Event/EventPage";
import EventsPage from "../components/EventsPage";
import Form from "../components/form/Form";
import InputField from "../components/form/InputField";
import RadioField from "../components/form/RadioField";
import CheckboxField from "../components/form/CheckboxField";
import SelectField from "../components/form/SelectField";
import Feature from "../components/Feature";
import Page from "../components/Page";
import Hero from "../components/flexible/Hero";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import HeroHome from "../components/home/HeroHome";
import WhoWeAre from "../components/home/WhoWeAre";
import WhatWeDo from "../components/home/WhatWeDo";
import WhoWhat from "../components/home/WhoWhat";
import HomePage from "../components/HomePage";
import WorkHome from "../components/home/WorkHome";
import OurTeam from "../components/home/OurTeam";


const components = {
  feature: Feature,
  grid: Grid,
  teaser: Teaser,


  page: Page,
  event: EventPage,
  events: EventsPage,
  form: Form,
  hero: Hero,
  InputField: InputField,
  RadioField: RadioField,
  CheckboxField: CheckboxField,
  SelectField: SelectField,


  homePage: HomePage,
  header: Header,
  footer: Footer,
  heroHome: HeroHome,
  whoWhat : WhoWhat,
  whoWeAre: WhoWeAre,
  whatWeDo: WhatWeDo,
  workHome: WorkHome,
  ourTeam: OurTeam
  //Home

};
export const getStoryblokApi = storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_API_TOKEN,
  use: [apiPlugin],
  components,
  apiOptions: {
    region: 'us',
  },
});