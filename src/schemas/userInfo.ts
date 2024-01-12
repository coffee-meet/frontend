import * as z from "zod";

export const UserInfoSchema = z.object({
  nickname: z
    .string()
    .min(1, { message: "닉네임을 입력해주세요." })
    .max(10, { message: "닉네임은 10자 이내로 입력해주세요." }),
  interest: z.array(z.string()).min(1, { message: "관심사를 선택해주세요." }),
});

export type UserInfoStateType = z.infer<typeof UserInfoSchema>;
