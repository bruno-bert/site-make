import React from "react"
import ContactStyle from "./styles"
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

export default function Contact(props) {
  const data = props.data
  const globalStyles = data.globalStyles  
  const locale = props.locale

  const titleStyle =
    data.styles && data.styles.titleStyle
      ? JSON.parse(data.styles.titleStyle)
      : null

  const subTitleStyle =
    data.styles && data.styles.subTitleStyle
      ? JSON.parse(data.styles.subTitleStyle)
      : null

  
  
  const ContactFormSchema = Yup.object().shape({
      name: Yup.string()
        .min(2, locale.short)
        .max(50, locale.long)
        .required(locale.required),
      email: Yup.string()
        .email(locale.invalidmail)
        .required(locale.required),
      subject: Yup.string()
        .min(2, locale.short)
        .max(50, locale.long)
        .required(locale.required),
      message: Yup.string()
        .min(5, locale.short)
        .max(500, locale.long)
        .required(locale.required),  
      });
   
   const formProps = {
     //action: "https://getform.io/f/c60ee031-c474-4b5d-bb29-2589f3f26b6e"
     method: "post", 'netlify-honeypot': "bot-field", 'data-netlify':"true"
   }

  const onSubmitForm = ({ setSubmitting }) => {
    
    setSubmitting(false)
  } 



  return (
    <ContactStyle id="contact" className="contact" styles={globalStyles}>
      
      <Formik
      initialValues={{ name: '',  email: '', subject: '', message: '' }}
      validationSchema={ContactFormSchema}     
      onSubmit={onSubmitForm} >
      {({ values, isSubmitting, dirty, handleReset, touched, errors }) => (
        
      
        
        <Form className="contact-form" {...formProps} >
          
        {data.title && <h1 style={titleStyle} dangerouslySetInnerHTML={{ __html: data.title }} />}
        {data.subtitle && <p style={subTitleStyle}>{data.subtitle}</p>}
     

          {/*<label htmlFor="name">{locale.name}</label>*/}
          <Field type="text" name="name" placeholder={locale.name} />
          <ErrorMessage className="input-feedback" name="name" component="div" />
          
          {/*<label htmlFor="name">{locale.mail}</label>*/}
          <Field type="email" name="email" placeholder={locale.mail}/>
          <ErrorMessage className="input-feedback" name="email" component="div" />

          {/*<label htmlFor="name">{locale.subject}</label> */}
          <Field type="text" name="subject" placeholder={locale.subject}/>
          <ErrorMessage className="input-feedback" name="subject" component="div" />
          
          {/*<label htmlFor="message">{locale.message}</label>*/}
          <Field type="text" name="message" as="textarea" placeholder={locale.message}/>
          <ErrorMessage className="input-feedback" name="message" component="div" />
          
          <div className="contact-form-buttons">
          <button  type="submit" disabled={isSubmitting}>
          {locale.submit}
          </button>

          <button
          type="button"
          className="outline"
          onClick={handleReset}
          disabled={!dirty || isSubmitting} >
          {locale.reset}
          </button>
          </div>


        </Form>
      )}
    </Formik>


       
    </ContactStyle>
  )
}
