// Instruction
  // In Parent Component, 
  // 1. Add a State for Conditional RenderingPropTypes.any,
  // 2. Add a Method to toggle the State. 
  // 3. Send the Method to the Header Component through to Reservation Button. 

// Import 
import React, { Component } from 'react'
import $ from 'jquery';
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/material_blue.css";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import ReservationModalSuccessMessage from './__SuccessMessage/ReservationModal__SuccessMessage';

export default class ReservationModal extends Component {
  constructor(props) {
    super(props)

    this.state = {
      submissionSuccess: false,
      submissionContents: 
        // null,
        {
          date: "2021年6月3日木曜日　から　2021年6月10日木曜日",
          email: "fdsf@gmail.com",
          name: "fdsf",
          plan: "② 平日に優雅に楽しむ、特別宿泊プラン",
        },
    }

    this.openModal = this.openModal.bind(this); 
    this.closeModal = this.closeModal.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.hideContentsContainer = this.hideContentsContainer.bind(this);
    this.showContentsContainer = this.showContentsContainer.bind(this);

  }


  componentDidMount() {
    this.$reservationModalBG = $(this.reservationModalBG);    
    this.$reservationModalContentsContainer = $(this.reservationModalContentsContainer);    
    this.$reservationModalSuccessMessage = $(this.reservationModalSuccessMessage);    
    this.$reservationModalBG.fadeOut(0);
    setTimeout(this.openModal, 100)
    
  }

  openModal() { 
    this.$reservationModalBG.fadeIn(500);
  }

  closeModal() {
    // console.log("modal clicked")
    this.$reservationModalBG.fadeOut(500, ()=>{
    
      setTimeout(this.props.toggleReservationModal(), 500);

    });
  }

  async submitForm(values) {    
    // console.log(values)     
    // console.log(values.date)

    let formData = new FormData();
      formData.append('entry.2093958900', values.name)
      formData.append('entry.245577634', values.email)
      formData.append('entry.1624774377', values.plan)
   
      let dateSelection;
      let date;
      let localeDateString;
      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      if(Array.isArray(values.date)) {
        values.date.map((dateItem, index)=> {
          if(index === 0) {

            date = new Date(dateItem);            
            localeDateString = date.toLocaleDateString('ja', options)

            dateSelection = `${localeDateString}　から　`

          } else if (index === values.date.length -1) {         

            date = new Date(dateItem);            
            localeDateString = date.toLocaleDateString('ja', options)
            dateSelection += `${localeDateString}`

          }
        })

      } else {

        dateSelection = `${values.date}`

      }

      // console.log(dateSelection);    
      formData.append('entry.736792581', dateSelection)

      this.setState({
        submissionContents: {
          name: values.name,
          email: values.email,
          plan: values.plan,
          date: dateSelection,
        }
      })

      // console.log("formData", formData)
      let url 
      = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSd36DeQOrzgKrkSuYeJd1VZhjU8eZtvtO3Zzj7EeTZaLqPRKA/formResponse'      

      let response = await fetch(url, {
        method: 'POST',
        mode: 'no-cors',
        headers: {          
        },
       
        body: formData,
      });

 
      if(await response.status === 0) {
        // console.log("success")
        this.displaySuccessMessage()
      } else if (await response.status === 200) {
        // console.log("failure")
      }

    // this.closeModal()

  }

  hideContentsContainer() {
    this.$reservationModalContentsContainer.fadeOut(500, ()=>{

      setTimeout(()=> {
        this.showContentsContainer()
      }, 500)
    });

  }

  showContentsContainer() {
    this.$reservationModalContentsContainer.fadeIn(500);

  }

  displaySuccessMessage() {   
    this.hideContentsContainer(
      
          // ()=> {
          setTimeout(()=> {        
            this.setState(
              {
                  submissionSuccess: true,          
              },
              // this.$reservationModalContentsContainer.fadeIn(2000)
            )
          }, 500)
          // }
        
    
      
    )
  }
  
  

  render() {
            
    return (
      <div className={`reservation-modal`}>
        
          <div 
            className="reservation-modal__bg"
            ref={reservationModalBG => this.reservationModalBG = reservationModalBG} 
          >

            {
              this.state.submissionSuccess && this.state.submissionContents ? (
                <div 
                  className="reservation-modal__contents-container reservation-modal__contents-container_success-message-container"
                  // className="reservation-modal__contents_success-message" 
                  // ref={reservationModalSuccessMessage=> this.reservationModalSuccessMessage = reservationModalSuccessMessage} 
                >
                <div className="reservation-modal__contents">

                  <ReservationModalSuccessMessage 
                    closeModal={this.closeModal}
                    submissionContents={this.state.submissionContents}
                  />

                </div>

                </div>

              ) : (
                <div 
                  className="reservation-modal__contents-container reservation-modal__contents-container_main-content"
                  // className="reservation-modal__contents_main-content" 
                >
                
                <div 
                  className="reservation-modal__contents"
                

                  ref={reservationModalContentsContainer => this.reservationModalContentsContainer = reservationModalContentsContainer } 
                >

                  {/* Into ReservationModalForm Component from here */}
                  <div 
                    className="reservation-modal__main-content"
                  >
                  
                    <div 
                      className="reservation-modal__title"
                    >
                      宿泊予約
                    </div>
                          
                      <div 
                        className="reservation-modal__close-icon"
                        onClick={this.closeModal}
                      ></div>
                                      
                      <Formik
                        initialValues={
                          {                                         
                            // name: "",
                            // email: "",
                            // plan: "placeholder",
                            // date: "日時を選択してください", 
                            name: "fds",
                            email: "fdfs@gmail.com",
                            plan: "①【期間限定】海辺の四季旬彩、贅沢美味懐石プラン",
                            date: ["Thu Jun 03 2021 00:00:00 GMT+0900 (Japan Standard Time)", "Thu Jun 04 2021 00:00:00 GMT+0900 (Japan Standard Time)"], 
                          }
                          
                        }
                        validationSchema={
                          Yup.object().shape({
                            name: 
                              Yup.string()
                              // .max(15, 'Must be 15 characters or less')                    
                              .required('必須項目になります。'),
                            
                            email: 
                              Yup.string()
                              .email('使用不可能なメールアドレスです。')
                              .required('必須項目になります。'),
                                  
                              
                            plan: 
                              Yup.mixed()
                              .test({
                                name: 'plan-validator',                        
                                test: function(value) {                                                                                                 
                                  return !["①【期間限定】海辺の四季旬彩、贅沢美味懐石プラン", "② 平日に優雅に楽しむ、特別宿泊プラン","③ 絶景貸切露天と個室会席を満喫できるファミリープラン"].includes(value)
                                    // Initial situation.
                                    ? 
                                      this.createError({
                                        message: '必須項目になります。',
                                        path: 'plan', // Fieldname
                                      })
                                    : true;
                                },
                              }),
                            date:                     
                              Yup.mixed()              
                              .test({
                                name: 'date-validator',                        
                                test: function(value) {                  
                                  return value === "日時を選択してください" 
                                    // Initial situation.
                                    ? 
                                      this.createError({
                                        message: '必須項目になります。',
                                        path: 'date', // Fieldname
                                      })                                                
                                    :                               
                                      true
                                },
                              }),                       
                          })                  
                        }
                        onSubmit={
                          (values, { setSubmitting }) => 
                            {
                              setTimeout(() => {                  
                                setSubmitting(false);                                
                                this.submitForm(values);
                              }, 400);
                            }
                        }
                        
                        className="reservation-modal__form"
                        
                        
                      
                      >                    

                        {
                          ({touched, errors, values}) => 
                            
                            
                        (

                        
                        <Form>

                          {
                            // console.log(values)
                          }

                          {
                            // console.log("touched Object from Form JSX", touched)
                          }


                          <div className="reservation-modal__form-content reservation-modal__form-content_user-input-container reservation-modal__form-content_user-input-container_num_1">
                            <label 
                              htmlFor="name" 
                              className="reservation-modal__form-content_user-input-title"
                            >
                              お名前
                            </label>            
                            <Field 
                              name="name"
                              type="text" 
                              placeholder="例：石井正悟"
                              className="reservation-modal__form-content_user-input"
                              
                            />
                            <ErrorMessage 
                              name="name"
                            />  
                          </div>
                  
                          <div className="reservation-modal__form-content reservation-modal__form-content_user-input-container">
                            <label 
                              htmlFor="email" 
                              className="reservation-modal__form-content_user-input-title"
                            >
                              メールアドレス
                            </label>            
                            <Field 
                              name="email"
                              type="email"
                              placeholder="例：Example@example.com"
                              className="reservation-modal__form-content_user-input"

                            />
                            <ErrorMessage 
                              name="email" 
                            />  
                          </div>

                          <div className="reservation-modal__form-content reservation-modal__form-content_user-input-container">
                            <label 
                              htmlFor="plan" 
                              className="reservation-modal__form-content_user-input-title"
                            >
                              ご希望プラン 
                              <span className="reservation-modal__form-content_user-input-title_annotation"> 
                              （空いているプランのみ表示されます）
                              </span>
                            </label>            
                            <Field 
                              name="plan"
                              as="select"
                              className="reservation-modal__form-content_user-input reservation-modal__form-content_select-box"
                              // defaultValue="placeholder"
                            >
                              <option 
                                value="placeholder" 
                                disabled={true} 
                                className="reservation-modal__form-content_select-box_option_placeholder"
                              >
                                プランを選択してください
                              </option>
                              <option value="①【期間限定】海辺の四季旬彩、贅沢美味懐石プラン">①【期間限定】海辺の四季旬彩、贅沢美味懐石プラン</option>
                              <option value="② 平日に優雅に楽しむ、特別宿泊プラン">② 平日に優雅に楽しむ、特別宿泊プラン</option>
                              <option value="③ 絶景貸切露天と個室会席を満喫できるファミリープラン">③ 絶景貸切露天と個室会席を満喫できるファミリープラン</option>
                            </Field>      
                            <ErrorMessage 
                              name="plan"                      
                            />  
                          </div>

                          <div className="reservation-modal__form-content reservation-modal__form-content_user-input-container">
                            <label 
                              htmlFor="date" 
                              className="reservation-modal__form-content_user-input-title"
                            >
                              日時選択
                              <span className="reservation-modal__form-content_user-input-title_annotation"> 
                              （一泊の場合は、前後の日時をご選択ください。）
                              </span>
                            </label>
                            <Field 
                              name="date"                             
                              className="reservation-modal__form-content_user-input_date-field"        
                            >     
                              {({
                                  field, // { name, value, onChange, onBlur }
                                  form: { touched, errors, values, setFieldValue }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                                  meta,
                                }) => (
                                  <div
                                    className="reservation-modal__form-content_user-input_date-field-flatpickr"
                                  >
                                    <Flatpickr
                                    
                                      options={{ 
                                        minDate: new Date(),
                                        mode: "range",                       
                                      }}
                                      placeholder="日時を選択してください"
                                      
                                      onChange={chosenDate => {   
                                        // console.log("touched Object from Flatpickr/onChange()", touched)
                                        setFieldValue("date", chosenDate)
                                      }}          
                                      onReady={()=> {
                                        // console.log("Formik/values from Flatpickr/onReady Prop", values)
                                      }}
                                      onValueUpdate={(params)=> {
                                        // console.log("Formik/values from Flatpickr/onValueUpdate Prop", values)
                                        // console.log("Formik/touched from Flatpickr/onValueUpdate Prop", touched)
                                      }}
                                      onDestroy={(params)=> {
                                        // console.log("Flatpickr/onDestroy()/Params", params)
                                      }}
                                      
                                      className="reservation-modal__form-content_user-input"
                                    
                                            
                                    />
                                                            
                                  </div>
                                )}
                            </Field>
                                              
                          
                              <ErrorMessage name="date" 
                              />  
                          
                                                  
                          </div>

                          <div className="reservation-modal__form-content reservation-modal__button-container">
                            <button
                              type="submit"  
                              className="reservation-modal__button reservation-modal__button_submit"
                            >
                              送信する
                            </button>                  
                            
                          </div>

                        </Form>       
                        
                        )}

                      
                      </Formik>
                    </div>
                  </div>
                </div>
                
              )
            }

            
        </div>

      </div>
    )
  }
}


// )
                    
// export default ReservationModal;