export interface Approval {
  approvalRequestUser: string
  approvalRequestUserStatus: string
}
export interface ApprovalInfo {
  approvalRequestUserName: string
  approvalRequestUserEmail: string
  approvalRequestUserBusinessCardImage: string
}
export interface ApprovalResult {
  result: string
}
export interface ReportResult {
  result: string
}
export interface Reports {
  chattingRoomName: string
  reportedUserName: string
  reportedDate: string
}
export interface Reporters {
  reporterUserName: string
  reportedDate: string
}
export interface ReportInfo {
  reportedUserName: string
  reportDate: string
  reason: string
  reportCount: number
  email: string
}
// req.body 오류 해결이 필요한 부분
// export interface ReportResult {
//   result: string
// }

export interface AdminLoginInfo {
  adminLoginResult: string
  adminLoginMessage: string
}

export interface Inquiry {
  inquiryRequestUser: string
  inquiryRequestDate: string
}
