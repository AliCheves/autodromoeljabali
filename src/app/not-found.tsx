import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-70vh flex items-center">
      <div className="container-xl py-20 text-center">
        <div className="font-display font-black text-[20vw] text-brand-gray-border leading-none select-none">
          404
        </div>
        <h1 className="font-display font-black text-4xl text-brand-black mt-4 mb-4">
          PÁGINA NO ENCONTRADA
        </h1>
        <p className="text-brand-gray-mid mb-10 max-w-md mx-auto">
          La página que estás buscando no existe o ha sido movida.
        </p>
        <Link href="/" className="btn-primary">
          Volver al Inicio
        </Link>
      </div>
    </div>
  );
}
