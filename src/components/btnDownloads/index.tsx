export default function BtnDownloads() {
  return (
    <button className='bg-[var(--cor-destaque-principal)] hover:bg-[var(--cor-destaque-principal-medial)] py-3 flex items-center justify-center rounded-full cursor-pointer mt-5 w-full border-none transition-colors duration-300'>
      <i className='fa-regular fa-share-from-square mr-2'></i>
      <span className='text-aliceblue text-lg'>Currículum vitae</span>
    </button>
  );
}
