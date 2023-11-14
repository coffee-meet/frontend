export interface Approval {
  approvalRequestUser: string
  approvalRequestUserStatus: string
}
export interface ApprovalInfo {
  approvalRequestUserName: string
  approvalRequestUserEmail: string
  approvalRequestUserBusinessCardImage: string
}
// req.body 오류 해결이 필요한 부분
// export interface ApprovalResult {
//   result: string
// }
export interface Reports {
  reportedUserName: string
  reportCount: number
}
export interface ReportInfo {
  reportedUserName: string
  reporterUserName: string
  reportDate: string
  reason: string
  reportCount: number
  email: string
}
// req.body 오류 해결이 필요한 부분
// export interface ReportResult {
//   result: string
// }
