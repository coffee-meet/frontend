import { create } from 'zustand'

type JobInfo = {
  jobInfo: string
  setJobInfo: (info: string) => void
}

const useJobStore = create<JobInfo>((set) => ({
  jobInfo: '',
  setJobInfo: (info) => set({ jobInfo: info }),
}))

export default useJobStore
