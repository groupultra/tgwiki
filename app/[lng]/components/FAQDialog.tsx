"use client";
export default function FAQDialog({
  dialogData: { title, description },
}: {
  dialogData: { title: string; description: string };
}) {
  return (
    <dialog id="faq_dialog" className="modal">
      <div className="modal-box w-[60vw] max-w-[80vw] sm:max-w-[60vw]">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <h3 className="font-bold text-lg">{title}</h3>
        <p className="py-4 h-[60vh]">{description}</p>
      </div>
    </dialog>
  );
}
