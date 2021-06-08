// Instructions
// : Styles for flatpickr is in vendors/flatpickr Folder. 

// Imports
import React, { Component } from "react";

import Flatpickr from "react-flatpickr";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import $ from 'jquery';


export default class ReservationModalMainContent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      flatpickrContainer: null,
    }

    this.flatpickrContainer = React.createRef();
    this.submitForm = this.submitForm.bind(this);

  }

  componentDidMount() {
    // console.log(this.flatpickrContainer.current);
    // console.log(this.flatpickrContainer.current.nodeType);
    this.setState({
      flatpickrContainer: this.flatpickrContainer.current,
    })
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

      this.props.setSubmissionContents({      
        name: values.name,
        email: values.email,
        plan: values.plan,
        date: dateSelection,        
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
        this.props.displaySuccessMessage()
      } else if (await response.status === 200) {
        // console.log("failure")
      }
    

  }


  render() {
    const flatpickrContainer = this.flatpickrContainer.current;
    // const flatpickrContainer = this.$reservationModalFlatpickrContainer;
    
    return (
      <div 
        className="reservation-modal__main-content"
      >
        <div className="reservation-modal__title">宿泊予約</div>

        <div
          className="reservation-modal__close-icon"
          onClick={this.props.closeModal}
        ></div>

        <Formik
          initialValues={{
            name: "",
            email: "",
            plan: "placeholder",
            date: "日時を選択してください",
            // name: "fds",
            // email: "fdfs@gmail.com",
            // plan: "①【期間限定】海辺の四季旬彩、贅沢美味懐石プラン",
            // date: ["Thu Jun 03 2021 00:00:00 GMT+0900 (Japan Standard Time)", "Thu Jun 04 2021 00:00:00 GMT+0900 (Japan Standard Time)"],
          }}
          validationSchema={Yup.object().shape({
            name: Yup.string()
              // .max(15, 'Must be 15 characters or less')
              .required("必須項目になります。"),

            email: Yup.string()
              .email("使用不可能なメールアドレスです。")
              .required("必須項目になります。"),

            plan: Yup.mixed().test({
              name: "plan-validator",
              test: function (value) {
                return ![
                  "①【期間限定】海辺の四季旬彩、贅沢美味懐石プラン",
                  "② 平日に優雅に楽しむ、特別宿泊プラン",
                  "③ 絶景貸切露天と個室会席を満喫できるファミリープラン",
                ].includes(value)
                  ? // Initial situation.
                    this.createError({
                      message: "必須項目になります。",
                      path: "plan", // Fieldname
                    })
                  : true;
              },
            }),
            date: Yup.mixed().test({
              name: "date-validator",
              test: function (value) {
                return value === "日時を選択してください"
                  ? // Initial situation.
                    this.createError({
                      message: "必須項目になります。",
                      path: "date", // Fieldname
                    })
                  : true;
              },
            }),
          })}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              setSubmitting(false);
              this.submitForm(values);
            }, 400);
          }}
          className="reservation-modal__form"
        >
          {({ touched, errors, values }) => (
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
                <ErrorMessage name="name" />
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
                <ErrorMessage name="email" />
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
                  <option value="①【期間限定】海辺の四季旬彩、贅沢美味懐石プラン">
                    ①【期間限定】海辺の四季旬彩、贅沢美味懐石プラン
                  </option>
                  <option value="② 平日に優雅に楽しむ、特別宿泊プラン">
                    ② 平日に優雅に楽しむ、特別宿泊プラン
                  </option>
                  <option value="③ 絶景貸切露天と個室会席を満喫できるファミリープラン">
                    ③ 絶景貸切露天と個室会席を満喫できるファミリープラン
                  </option>
                </Field>
                <ErrorMessage name="plan" />
              </div>

              <div className="reservation-modal__form-content reservation-modal__form-content_user-input-container">
                <label
                  htmlFor="date"
                  className="reservation-modal__form-content_user-input-title"
                >
                  日時選択
                  <span className="reservation-modal__form-content_user-input-title_annotation">
                    （間の夜間の宿泊になります。一泊の場合は、前後の日時をご選択ください。）
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
                    <div     className="reservation-modal__form-content_user-input_date-field-flatpickr"
                    // ref={reservationModalFlatpickrContainer => this.reservationModalFlatpickrContainer = reservationModalFlatpickrContainer } 
                    ref={this.flatpickrContainer}
                    >
                      { 
                      this.state.flatpickrContainer && 

                        <Flatpickr
                        options={{
                          minDate: new Date(),
                          mode: "range",
                          appendTo: this.state.flatpickrContainer,
                          // positionElement: this.state.flatpickrContainer,
                          static: true,
                        }}
                        placeholder="日時を選択してください"
                        onChange={(chosenDate) => {
                          // console.log("touched Object from Flatpickr/onChange()", touched)
                          setFieldValue("date", chosenDate);
                        }}
                        onReady={() => {
                          // console.log("Formik/values from Flatpickr/onReady Prop", values)
                        }}
                        onValueUpdate={(params) => {
                          // console.log("Formik/values from Flatpickr/onValueUpdate Prop", values)
                          // console.log("Formik/touched from Flatpickr/onValueUpdate Prop", touched)
                        }}
                        onDestroy={(params) => {
                          // console.log("Flatpickr/onDestroy()/Params", params)
                        }}
                        className="reservation-modal__form-content_user-input"
                        // wra
                        // style={{
                        //   'width': '100%'
                        // }}
                        
                        // ref={reservationModalFlatpickr => this.reservationModalFlatpickr = reservationModalFlatpickr}
                      />
                     } 
                       
                      
                    </div>
                  )}
                </Field>

                <ErrorMessage name="date" />
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
    );
  }
}
