import { Advocate } from "../../types";
import { Tr, Td, SpecialtyBadge } from "./AdvocatesTable.styles";

export default function AdvocateRow({ advocate }: { advocate: Advocate }) {
  const specialties = advocate.specialties ?? [];

  return (
    <Tr key={`${advocate.phoneNumber}`}>
      <Td>{advocate.firstName}</Td>
      <Td>{advocate.lastName}</Td>
      <Td>{advocate.city}</Td>
      <Td>{advocate.degree}</Td>
      <Td>
        {specialties.length > 0 ? (
          <>
            {specialties.slice(0, 5).map((s, i) => (
              <SpecialtyBadge key={i}>{s}</SpecialtyBadge>
            ))}
            {specialties.length > 5 && (
              <SpecialtyBadge>+{specialties.length - 5} more</SpecialtyBadge>
            )}
          </>
        ) : (
          <span style={{ color: "#888", fontStyle: "italic" }}>No specialties</span>
        )}
      </Td>
      <Td>
        {advocate.yearsOfExperience} year{advocate.yearsOfExperience !== 1 && "s"}
      </Td>
      <Td>{advocate.phoneNumber}</Td>
    </Tr>
  );
}
