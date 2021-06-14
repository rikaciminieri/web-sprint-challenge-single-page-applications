import * as yup from "yup";

const schema = yup.object().shape({
    name: yup.string().min(2,"name must be at least 2 characters").required("name is required")
})

export default schema;