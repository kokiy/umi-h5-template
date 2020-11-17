import request from '@/util/request'

const { get } = request

const wxSignature = data => get('/bff/wx/signature', { params: data })

export { wxSignature }
