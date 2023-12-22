import * as z from "zod";

const ACCEPTED_FILE_TYPES = ["image/png", "image/jpg", "image/jpeg"];

export const CompanyInfoSchema = z.object({
  companyName: z.string().min(1, { message: "회사명을 입력해주세요." }),
  companyEmail: z
    .string()
    .min(1, { message: "회사 이메일을 입력해주세요." })
    .email({ message: "이메일 형식이어야 합니다." }),
  department: z.array(z.string().min(1, { message: "부서를 선택해주세요." })),
  businessCard: z
    .any()
    .refine((files) => files?.length === 1, { message: "명함 사진을 첨부해주세요." })
    .refine((files) => ACCEPTED_FILE_TYPES.includes(files?.[0]?.type), {
      message: "이미지 파일만 첨부할 수 있습니다.",
    }),
});

export type CompanyInfoStateType = z.infer<typeof CompanyInfoSchema>;
