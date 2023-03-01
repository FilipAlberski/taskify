import { FormRowContainer } from "./FormRow.styled";

const FormRow = ({
    type,
    name,
    value,
    handleChange,
    labelText,
    placeholder,
}) => {
    return (
        <FormRowContainer className="form-row">
            <label htmlFor={name} className="form-label">
                {labelText || name}
            </label>

            <input
                type={type}
                value={value}
                name={name}
                onChange={handleChange}
                className="form-input"
                placeholder={placeholder}
            />
        </FormRowContainer>
    );
};
export default FormRow;
