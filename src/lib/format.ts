const nf = new Intl.NumberFormat('en-US')
export const formatTsh = (value: number | string) => `Tsh. ${nf.format(Number(value) || 0)}`
