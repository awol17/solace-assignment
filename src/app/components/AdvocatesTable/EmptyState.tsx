export default function EmptyState({ message }: { message: string }) {
    return (
        <tr>
            <td colSpan={7} style={{ textAlign: "center", padding: "40px", fontSize: "1rem", color: "#6b7280" }}>
                <div style={{ fontSize: "32px", marginBottom: "8px" }}>🤷‍♂️</div>
                {message}
            </td>
        </tr>
    );
}
