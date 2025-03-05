// import { useState } from "react";

// interface ModalFormProps {
//     formUrl: string;
//   }

// const ModalForm: React.FC<ModalFormProps> = ({ formUrl }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <>
//       {/* Get Started Button */}
//       <button onClick={() => setIsOpen(true)} className=" rounded-lg">
//         <div className="xs:flex-shrink-0 group relative flex xs:inline-flex w-34 xs:w-auto items-center justify-center px-5 h-12 font-bold text-gray-300 rounded-lg transition-all duration-300 focus:outline-none">
//           <div className="absolute top-0 left-0 w-full h-full rounded-lg" />
//           Get Started
//         </div>
//       </button>

//       {/* Modal */}
//       {isOpen && (
//         <div className="fixed inset-0 bg-opacity-50 flex justify-center items-center z-50 backdrop-blur-2xl">
//           <div className="bg-[#282f3b] p-6 rounded-lg shadow-lg w-4/4 max-w-4xl max-h-screen relative">
//             {/* Close Button */}
//             <button
//               onClick={() => setIsOpen(false)}
//               className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
//             >
//               ✕
//             </button>

//             {/* Embedded Form */}
//             <iframe
//               src={formUrl}
//               width="100%"
//               height="400"
//               className="border-none"
//               title="Form"
//             ></iframe>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default ModalForm;



import { useState } from "react";
import { createPortal } from "react-dom";

interface ModalFormProps {
  formUrl: string;
}

const ModalForm: React.FC<ModalFormProps> = ({ formUrl }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Get Started Button */}
      <button onClick={() => setIsOpen(true)} className="rounded-lg">
        <div className="xs:flex-shrink-0 group relative flex xs:inline-flex w-34 xs:w-auto items-center justify-center px-5 h-12 font-bold text-gray-300 rounded-lg transition-all duration-300 focus:outline-none">
          <div className="absolute top-0 left-0 w-full h-full rounded-lg" />
          Get Started
        </div>
      </button>

      {/* Modal (Rendered outside its parent using createPortal) */}
      {isOpen &&
        createPortal(
          <div className="fixed inset-0 bg-opacity-50 flex justify-center items-center z-50 backdrop-blur-2xl">
            <div className="bg-[#282f3b] lg:p-18 md:p-14 p-12 mx-5 rounded-lg shadow-lg lg:w-3/4 w-5/5 max-w-4xl max-h-screen relative">
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-2 right-2 text-gray-200 hover:text-[#D95D39] mr-3"
              >
                ✕
              </button>

              {/* Embedded Form */}
              <iframe
                src={formUrl}
                width="100%"
                height="400"
                className="border-none"
                title="Form"
              ></iframe>
            </div>
          </div>,
          document.body // 👈 Ensures the modal renders at the root level, avoiding clipping
        )}
    </>
  );
};

export default ModalForm;
