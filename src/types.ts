export interface User {
  _id: string
  username?: string
  email?: string
  accessToken: string
}

export interface Service {
  _id: string
  title: string
  desc: string
  img: string
  category: string
}

export interface Product {
  _id: string
  title: string
  desc: string
  img: string
  brand: string
  type: string
  price: number | string
  inStock?: boolean
  status?: string
}

export interface CartItem extends Product {
  quantity: number
}

export interface OrderProduct extends Partial<Product> {
  _id?: string
  quantity: number
}

export interface Order {
  _id: string
  name: string
  email: string
  phoneNumber: string
  address: string
  amount: number
  status: string
  createdAt: string
  products: OrderProduct[]
}

export interface CheckoutDetails {
  name: string
  email: string
  phoneNumber: string
  address: string
}
