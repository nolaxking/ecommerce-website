import { extendType, objectType } from "nexus"
import { Customer } from "nexus-prisma"





export const CustomerType = objectType({
        name: Customer.$name,
    definition(t) {
        t.field(Customer.id)
        t.field(Customer.createdAt)
        t.field(Customer.updatedAt)
        t.field(Customer.firstName)
        t.field(Customer.lastName)
    
        t.field(Customer.email)
        t.field(Customer.phoneNumber)
     
      
    
    }
})