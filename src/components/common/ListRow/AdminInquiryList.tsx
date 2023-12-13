import styled from "@emotion/styled";
import { useQuery } from "@tanstack/react-query";
import AdminInquiryAPI from "@/apis/adminInquiry/AdminInquiryApi";
import AdminApprovalListRow from "@/components/common/ListRow/AdminApprovalListRow";
import AdminInquiryListRowTitle from "@/components/common/ListRow/AdminInquiryListRowTitle";
import { palette } from "@/styles/palette";

interface AdminInquiryListProps {
  onInquirySelectUserName: (nickname: string) => void;
}

// interface InquiryListData {
//   inquiryRequestUser: string
//   inquiryRequestDate: string
//   onInquirySelectUserName: (nickname: string) => void
// }
interface InquiryData {
  inquiryId?: number;
  inquirer: string;
  title?: string;
  createdAt: string;
}

interface InquiryData {
  inquiryId?: number;
  inquirer: string;
  title?: string;
  createdAt: string;
}

const AdminInquiryList = ({ onInquirySelectUserName }: AdminInquiryListProps) => {
  // API 요청 코드
  const { data, isSuccess } = useQuery({
    queryKey: ["AdminInquiryList"],
    queryFn: AdminInquiryAPI.GET_INQUIRY_LIST,
  });

  const handlePersonInquiry = (inquiryNickname: string) => {
    onInquirySelectUserName(inquiryNickname);
  };
  const inquiryDatas = data?.data.contents;
  // const mockData = [
  //   // 실제 예시 response 데이터
  //   // createdAt: '2023-11-22 12:54:06.291'
  //   {
  //     inquiryId: 5732,
  //     inquirer: '박상민',
  //     title: '제목1',
  //     createdAt: '2023.11.22',
  //   },
  //   {
  //     inquiryId: 6155,
  //     inquirer: '박은지',
  //     title: '제목2',
  //     createdAt: '2023.11.22',
  //   },
  //   { inquirer: '주다현', createdAt: '2023.11.22' },
  //   { inquirer: '남궁호수', createdAt: '2023.11.21' },
  //   { inquirer: '유명한', createdAt: '2023.11.21' },
  //   { inquirer: '박상민', createdAt: '2023.11.17' },
  //   { inquirer: '남궁호수', createdAt: '2023.11.17' },
  //   { inquirer: '주다현', createdAt: '2023.11.17' },
  //   { inquirer: '박은지', createdAt: '2023.11.17' },
  //   { inquirer: '우창욱', createdAt: '2023.11.10' },
  //   { inquirer: '유명한', createdAt: '2023.11.10' },
  // ]

  return (
    <AdminInquiryListContainerOuterWrapper>
      <AdminInquiryListContainer>
        {isSuccess && (
          <>
            <AdminInquiryListRowTitle
              frontName={"문의자"}
              height={71}
              isDarkMode={false}
              backName={"문의 일시"}
            ></AdminInquiryListRowTitle>
            {inquiryDatas.length > 0 ? (
              inquiryDatas.map((inquiryData: InquiryData, index: number) => (
                <AdminApprovalListRow
                  key={index}
                  height={71}
                  nickname={inquiryData.inquirer}
                  infoMessage={inquiryData.createdAt}
                  isDarkMode={false}
                  onClick={() => handlePersonInquiry(inquiryData.inquirer)}
                />
              ))
            ) : (
              <StyledNoInquiryListAlertText>
                {"현재 문의 내역이 없습니다!"}
              </StyledNoInquiryListAlertText>
            )}
          </>
        )}
        {/* {isSuccess &&
          inquiryDatas.map((inquiryListData: InquiryListData, index: number) => (
            <AdminApprovalListRow
              key={index}
              height={71}
              nickname={inquiryListData.inquiryRequestUser}
              infoMessage={inquiryListData.inquiryRequestDate}
              isDarkMode={false}
              onClick={() => handlePersonInquiry(inquiryListData.inquiryRequestUser)}
            />
          ))} */}
      </AdminInquiryListContainer>
    </AdminInquiryListContainerOuterWrapper>
  );
};
const AdminInquiryListContainerOuterWrapper = styled.div`
  background-color: ${palette.WHITE};
  width: 100%;
  height: 591px;
`;
const AdminInquiryListContainer = styled.div`
  background-color: ${palette.WHITE};
  overflow: scroll;
  height: 662px;
  width: 80%;
  margin: auto;
  cursor: pointer;
`;
const StyledNoInquiryListAlertText = styled.p`
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  padding-top: 20px;
  color: ${palette.GRAY500};
`;

export default AdminInquiryList;
