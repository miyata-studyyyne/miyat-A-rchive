import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section id="logo" className="h-screen box-border p-4 bg-yellow-200">
        <div>miyat-A-rchive</div>
      </section>
      <section id="hero" className="box-border h-150 p-4 bg-blue-200">
        <div className="flex flex-col justify-center items-center h-full">
          <div className="relative w-80 h-80  bg-blue-500 rounded-full overflow-hidden">
            <Image
              src="/miyata-icon.png"
              alt="Miyata Icon"
              fill
              className="object-cover"
            />
          </div>
          <div className="box-border text-center w-150 h-30 p-4 bg-red-200 mt-10">
            <h3>----- みやてぃ～ぬ -----</h3>
            <p>情報系の学部に通う大学生</p>
            <p>プログラミングと言語学を中心に学んだ内容を記録しています</p>
          </div>
        </div>
      </section>
      <section id="news" className="box-border h-100 p-4 bg-red-200">
        n
      </section>
      <section id="works" className="box-border h-100 p-4 bg-white-200">
        w
      </section>
      <section id="articles" className="box-border h-100 p-4 bg-green-200">
        a
      </section>
    </main>
  );
}
