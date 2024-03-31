import { Accordion } from "./Accordion";

export const Faq = () => {
    const faqs = [
        {
          "id": 1,
          "question": "Ebook là gì?",
          "answer": "Ebook là một loại sách điện tử được sử dụng thông qua các thiết bị cá nhân như máy tính, smartphone"
        },
        {
          "id": 2,
          "question": "Ebook là gì?",
          "answer": "Ebook là một loại sách điện tử được sử dụng thông qua các thiết bị cá nhân như máy tính, smartphone"
        },
        {
          "id": 3,
          "question": "Ebook là gì?",
          "answer": "Ebook là một loại sách điện tử được sử dụng thông qua các thiết bị cá nhân như máy tính, smartphone"
        },
        {
          "id": 4,
          "question": "Ebook là gì?",
          "answer": "Ebook là một loại sách điện tử được sử dụng thông qua các thiết bị cá nhân như máy tính, smartphone"
        }
    ];
    
  return (
    <section className="my-10 p-7 border rounded dark:border-slate-700 shadow-sm">        
      <h1 className="text-2xl text-center font-semibold dark:text-slate-100 mb-3 underline underline-offset-8">Question</h1>    
            <div className="" id="accordion-flush" data-accordion="collapse" data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white" data-inactive-classes="text-gray-500 dark:text-gray-400">
              { faqs.map((faq) => (
                <Accordion key={faq.id} faq={faq} /> 
              )) }
            </div>
      </section>
  )
}
