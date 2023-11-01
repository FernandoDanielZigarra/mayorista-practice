
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Swal from 'sweetalert2';
import Persona from "../../assets/persona.png";
import Mail from "../../assets/mail.png";
import Nota from "../../assets/nota.png";
import Telefono from "../../assets/telefono.png";

const Contacto = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    formik.handleSubmit();

    if (formik.isValid) {
      Swal.fire({
        title: '¡Formulario enviado!',
        text: 'Tu formulario ha sido enviado con éxito.',
        icon: 'success',
        confirmButtonText: 'Cerrar',
      });
    }
  };

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required('El nombre es requerido'),
      lastName: Yup.string().required('El apellido es requerido'),
      email: Yup.string().email('Ingresa una dirección de correo válida').required('El correo electrónico es requerido'),
      phone: Yup.string().matches(/^\d{10}$/, 'El teléfono debe tener 10 dígitos numéricos').required('El teléfono es requerido'),
      message: Yup.string().required('Debes escribir un mensaje'),
    }),
    onSubmit: (values) => {


      console.log(values);
    },

  });

  return (
    <form onSubmit={handleSubmit}>
      <main className="flex flex-col items-center justify-center h-screen bg-mariner-900">
        <div className="bg-white rounded p-8 shadow-md w-full max-w-md">
          <h3 className="text-xl font-bold text-gray-800 text-center mb-4">Contacto</h3>

          <div className="flex items-center mb-4">
            <div className="img mr-3">
              <img src={Persona} alt="img" />
            </div>
            <input
              type="text"
              className="w-full border border-gray-300 p-2 rounded"
              placeholder="Nombre"
              aria-label="First name"
              {...formik.getFieldProps('firstName')}
            />
          </div>
          {formik.touched.firstName && formik.errors.firstName ? (
            <div className="text-red-600">{formik.errors.firstName}</div>
          ) : null}

          <div className="flex items-center mb-4">
            <div className="img mr-3">
              <img src={Persona} alt="img" />
            </div>
            <input
              type="text"
              className="w-full border border-gray-300 p-2 rounded"
              placeholder="Apellido"
              aria-label="Last name"
              {...formik.getFieldProps('lastName')}
            />
          </div>
          {formik.touched.lastName && formik.errors.lastName ? (
            <div className="text-red-600">{formik.errors.lastName}</div>
          ) : null}

          <div className="flex items-center mb-4">
            <div className="img mr-3">
              <img src={Mail} alt="img" />
            </div>
            <input
              type="text"
              className="w-full border border-gray-300 p-2 rounded"
              placeholder="Ingresa tu email"
              aria-label="Email Address"
              {...formik.getFieldProps('email')}
            />
          </div>
          {formik.touched.email && formik.errors.email ? (
            <div className="text-red-600">{formik.errors.email}</div>
          ) : null}

          <div className="flex items-center mb-4">
            <div className="img mr-3">
              <img src={Telefono} alt="img" />
            </div>
            <input
              type="text"
              className="w-full border border-gray-300 p-2 rounded"
              placeholder="Teléfono"
              aria-label="Phone"
              {...formik.getFieldProps('phone')}
            />
          </div>
          {formik.touched.phone && formik.errors.phone ? (
            <div className="text-red-600">{formik.errors.phone}</div>
          ) : null}

          <div className="flex items-center mb-4">
            <div className="img mr-3">
              <img src={Nota} alt="img" />
            </div>
            <textarea
              className="w-full border border-gray-300 p-2 rounded"
              placeholder="Escribe tu duda o consulta aquí..."
              id="floatingTextarea2"
              style={{ height: '100px' }}
              {...formik.getFieldProps('message')}
            />
          </div>
          {formik.touched.message && formik.errors.message ? (
            <div className="text-red-600">{formik.errors.message}</div>
          ) : null}

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Enviar
            </button>
          </div>
        </div>
      </main>
    </form>

  );
}

export default Contacto;