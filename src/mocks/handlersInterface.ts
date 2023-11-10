export interface Approval {
  name: string
  status: string
}
export interface ApprovalInfo {
  name: string
  email: string
  businessCardImage: string
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
