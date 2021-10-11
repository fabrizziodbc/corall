import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { sendForm, init } from "emailjs-com";
import "./style.scss";
const Forms = () => {
  init("user_uVPa1t7UTgJN9JUbKQhGE");
  const [sendState, setSendState] = useState(false);
  const sended = () => {
    setSendState(true);
    setTimeout(() => {
      setSendState(false);
    }, 3000);
  };
  return (
    <>
    <h2 className="form_title">Envíanos tu mensaje</h2>
    <Formik
      initialValues={{
        nombre: "",
        correo: "",
        telefono: "",
        mensaje: "",
      }}
      validate={(valores) => {
        let errores = {};

        if (!valores.nombre) {
          errores.nombre = "Por favor, ingresa un nombre";
        } else if (!/^[a-z ,.'-]+$/i.test(valores.nombre)) {
          errores.nombre = "El nombre solo puede contener letras y espacios";
        }
        if (!valores.correo) {
          errores.correo = "Por favor, ingresa un correo electrónico";
        } else if (
          !/^(?:[^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*|"[^\n"]+")@(?:[^<>()[\].,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,63}$/i.test(
            valores.correo
          )
        ) {
          errores.correo = "Por favor ingresar un coreo válido";
        }
        if (!valores.telefono) {
          errores.telefono = "Por favor, ingresa un número de telefono";
        } else if (!/^[0-9\-\+]{9,15}$/i.test(valores.telefono)) {
          errores.telefono = "Formáto de número de teléfono inválido";
        }
        if (!valores.mensaje) {
          errores.mensaje = "Por favor, ingresa un mensaje";
        }

        return errores;
      }}
      onSubmit={(valores, { resetForm }) => {
        sendForm("service_y5leog6", "template_zx4veig", "#myform").then(
          () => {
            sended();
          },
          (error) => {
            alert("Parece que ha ocurrido un error, por favor inténtelo de nuevo en unos minutos", error.text);
          }
        );
        resetForm();
        

        console.log("formulario enviado, baby");
      }}
    >
      {({ errors }) => (
        <Form className="form" id="myform">
          <div>
            <Field
              type="text"
              id="nombre"
              name="nombre"
              placeholder="Nombre:"
            />
            <ErrorMessage
              name="nombre"
              component={() => <div className="errors">{errors.nombre}</div>}
            />
          </div>
          <div>
            <Field
              type="text"
              id="correo"
              name="correo"
              placeholder="Correo:"
            />
            <ErrorMessage
              name="correo"
              component={() => <div className="errors">{errors.correo}</div>}
            />
          </div>
          <div>
            <Field
              type="number"
              id="telefono"
              name="telefono"
              placeholder="Teléfono:"
            />
            <ErrorMessage
              name="telefono"
              component={() => <div className="errors">{errors.telefono}</div>}
            />
          </div>
          <div>
            <Field
              type="text"
              id="mensaje"
              name="mensaje"
              placeholder="Mensaje:"
              className="message_form"
            />
            <ErrorMessage
              name="mensaje"
              component={() => <div className="errors">{errors.mensaje}</div>}
            />
          </div>
          <button className="form_button" type="submit">Enviar</button>
          {sendState && <p className="exito">Mensaje enviado con éxito</p>}
        </Form>
      )}
    </Formik>
    </>
  );
};
export { Forms };
