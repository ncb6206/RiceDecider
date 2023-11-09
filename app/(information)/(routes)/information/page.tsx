import InformationCard from '@/app/components/information/InformationCard';
import InformationFooter from '@/app/components/information/InformationFooter';
import InformationHeader from '@/app/components/information/InformationHeader';

const InformationPage = () => {
  return (
    <main className="flex h-full w-full flex-col items-center">
      <InformationHeader />
      <InformationCard
        imageUrl={InformationData.imageUrl}
        Name={InformationData.Name}
        keywords={InformationData.keywords}
        address={InformationData.address}
        tel={InformationData.tel}
        time={InformationData.time}
        hoomo={InformationData.hoomo}
      />
      <div className="flex-1" />
      <InformationFooter />
    </main>
  );
};

export default InformationPage;

const InformationData = {
  imageUrl:
    'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20231005_200%2F1696464055276npRVm_JPEG%2FKakaoTalk_20230602_184422712.jpg',
  Name: '식당 이름',
  keywords: ['키워드1', '키워드2', '키워드3'],
  address: '서울특별시 성북구 동선동 123-56',
  tel: '02-123-4567',
  time: '평일 11:00-22:30 <br /> 일요일 12:00-22:00',
  hoomo: '매월 첫째주 일요일',
};
