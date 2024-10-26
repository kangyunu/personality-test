import Link from "next/link";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-purple-100 flex items-center justify-center">
      <div className="text-center space-y-6 max-w-lg px-6">
        <h1 className="text-4xl font-extrabold text-gray-800 leading-snug">
          당신의 성격 유형을 발견하고
          <br />
          성장의 첫걸음을 내딛으세요
        </h1>
        <p className="text-lg text-gray-600">
          탐구적인 모험가인가요? 아니면 신중한 전략가일까요?
          <br />
          16가지 독특한 성격 유형을 통해 자신을 깊이 이해하고,
          <br />
          삶과 관계에서의 강점을 발견해보세요.
        </p>
        <Link href="/big-five-hexaco">
          <button className="mt-4 bg-blue-600 hover:bg-blue-500 text-white text-lg font-medium py-3 px-8 rounded-lg shadow-lg transition-all duration-300">
            시작하기
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
