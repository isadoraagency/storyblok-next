import {storyblokEditable, StoryblokServerComponent} from "@storyblok/react/rsc";
 import "@/assets/scss/contact/steps.scss";
const Form = ({ blok }) => {
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const formData = new FormData(e.target);
  //   fetch(blok.action_url, { method: 'POST', body: formData })
  //     .then(() => alert('Thank you!'))
  //     .catch((error) => alert(`Error: ${error.message}`));
  // };

  return (
    <div className="inner">
      <form  {...storyblokEditable(blok)}>

        {blok.fields.map((field) => (
          <StoryblokServerComponent blok={field} key={field._uid}/>
        ))}
        <button className="ia-btn ia-btn--primary ia-btn--md" type="submit">{blok.submit_text || 'Submit'}</button>
      </form>
    </div>
  );
};

export default Form;