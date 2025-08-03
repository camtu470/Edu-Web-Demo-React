import { useState } from "react";
import {
  FaPlus,
  FaMinus,
  FaLongArrowAltRight,
  FaLongArrowAltLeft,
} from "react-icons/fa";

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "1. What is Feedback?",
    answer:
      "Feedback is information given about performance, used for improvement.",
  },
  {
    question: "2. Why should your organization use Feedback Application?",
    answer: "It helps track and improve organizational performance.",
  },
  {
    question: "3. How to Contact Us?",
    answer: "You can contact us via email: support@example.com.",
  },
  {
    question: "4. Trust Level of Feedback Application?",
    answer: "We use secure protocols to protect your data.",
  },
  {
    question: "5. What is Feedback?",
    answer: "This is another sample answer.",
  },
  {
    question: "6. Why should your organization use Feedback Application?",
    answer: "Because it makes feedback collection easy and efficient.",
  },
  {
    question: "7. What is Feedback?",
    answer:
      "Feedback is information given about performance, used for improvement.",
  },
  {
    question: "8. Why should your organization use Feedback Application?",
    answer: "It helps track and improve organizational performance.",
  },
  {
    question: "9. How to Contact Us?",
    answer: "You can contact us via email: support@example.com.",
  },
  {
    question: "10. Trust Level of Feedback Application?",
    answer: "We use secure protocols to protect your data.",
  },
  {
    question: "11. What is Feedback?",
    answer: "This is another sample answer.",
  },
  {
    question: "12. Why should your organization use Feedback Application?",
    answer: "Because it makes feedback collection easy and efficient.",
  },
];
export default function FAQItem() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [page, setPage] = useState(1);

  const itemsPerPage = 5;
  const totalPages = Math.ceil(faqs.length / itemsPerPage);

  // Lấy câu hỏi theo trang
  const start = (page - 1) * itemsPerPage;
  const currentFaqs = faqs.slice(start, start + itemsPerPage);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleNext = () => {
    if (page < totalPages) {
      setOpenIndex(null);
      setPage(page + 1);
    }
  };

  const handlePrev = () => {
    if (page > 1) {
      setOpenIndex(null);
      setPage(page - 1);
    }
  };
  return (
    <div className="flex flex-col gap-6 px-4 md:px-10 lg:px-20  lg:py-10">
      <p className="text-3xl sm:text-4xl md:text-5xl text-[#08A4A3] font-bold text-center">
        Câu hỏi thường gặp
      </p>
      <p className="text-gray-500 text-center text-sm md:text-base">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum at
        mollitia ab omnis ducimus
      </p>

      <div className="w-full flex flex-col lg:flex-row gap-10">
        {/* Câu hỏi */}
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col gap-6">
            {currentFaqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow p-4 flex justify-between items-start cursor-pointer"
                onClick={() => toggle(index)}
              >
                <div className="flex-1">
                  <p className="font-medium text-base sm:text-lg">
                    {faq.question}
                  </p>
                  {openIndex === index && (
                    <p className="text-sm text-gray-600 mt-2">{faq.answer}</p>
                  )}
                </div>
                <div className="text-[#08A4A3] mt-1 ml-4">
                  {openIndex === index ? <FaMinus /> : <FaPlus />}
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center gap-4 mt-6">
            <button
              className={`w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 ${
                page === 1 ? "opacity-50 cursor-not-allowed" : ""
              }`}
              onClick={handlePrev}
              disabled={page === 1}
            >
              <FaLongArrowAltLeft />
            </button>
            <span className="text-sm text-gray-600">
              {page} / {totalPages}
            </span>
            <button
              className={`w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 ${
                page === totalPages ? "opacity-50 cursor-not-allowed" : ""
              }`}
              onClick={handleNext}
              disabled={page === totalPages}
            >
              <FaLongArrowAltRight />
            </button>
          </div>
        </div>

        {/* Hình + form */}
        <div className="w-full lg:w-1/2 flex flex-col gap-4">
          <img
            src="https://i.pinimg.com/1200x/97/cf/f8/97cff83a4d4ea9b5589f76ebe7780c2d.jpg"
            alt=""
            className="w-full object-cover rounded-xl max-h-72"
          />
          <p className="font-bold text-2xl sm:text-3xl text-[#08A4A3] text-center">
            Any Question?
          </p>
          <p className="text-gray-500 text-center text-sm md:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
            recusandae.
          </p>
          <form
            action=""
            className="flex flex-col sm:flex-row gap-3 items-center mt-4"
          >
            <input
              type="text"
              placeholder="Let me know"
              className="w-full sm:w-10/12 border p-4 px-6 rounded-xl placeholder-[#0BA69D] focus:outline-none focus:border-[#0BA69D] focus:ring-1 focus:ring-[#0BA69D]"
            />
            <button className="bg-[#0BA69D] text-white font-bold p-4 px-6 rounded-xl w-full sm:w-2/12">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
