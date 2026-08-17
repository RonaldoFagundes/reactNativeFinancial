import { StyleSheet } from "react-native";

export default StyleSheet.create({

    container: {
        marginHorizontal: 24,
        marginTop: 20,
        marginBottom: 20
    },

    label: {
        color: "#94A3B8",
        fontSize: 13,
        fontWeight: "600",
        marginBottom: 8
    },

    dropdown: {
        minHeight: 72,
        backgroundColor: "#1E1B2E",
        borderRadius: 16,
        paddingHorizontal: 14,
        paddingVertical: 12,
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "rgba(255,255,255,0.06)"
    },

    selectedIcon: {
        width: 44,
        height: 44,
        borderRadius: 12,
        backgroundColor: "rgba(68,232,195,0.10)",
        justifyContent: "center",
        alignItems: "center",
        marginRight: 12
    },

    selectedContent: {
        flex: 1
    },

    selectedType: {
        color: "#FFFFFF",
        fontSize: 15,
        fontWeight: "700"
    },

    selectedNumber: {
        color: "#94A3B8",
        fontSize: 12,
        marginTop: 4
    },

    selectedRight: {
        alignItems: "flex-end",
        gap: 4
    },

    selectedBalance: {
        color: "#44E8C3",
        fontSize: 13,
        fontWeight: "700"
    },

    placeholder: {
        flex: 1,
        color: "#94A3B8",
        fontSize: 14
    },

    modalOverlay: {
        flex: 1,
        justifyContent: "flex-end"
    },

    modalBackground: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: "rgba(0,0,0,0.65)"
    },

    modalContent: {
        backgroundColor: "#14121F",
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 30,
        maxHeight: "75%"
    },

    modalHeader: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 18
    },

    modalTitle: {
        color: "#FFFFFF",
        fontSize: 20,
        fontWeight: "800"
    },

    modalSubtitle: {
        color: "#94A3B8",
        fontSize: 13,
        marginTop: 4
    },

    closeButton: {
        width: 38,
        height: 38,
        borderRadius: 12,
        backgroundColor: "#1E1B2E",
        justifyContent: "center",
        alignItems: "center"
    },

    option: {
        backgroundColor: "#1E1B2E",
        borderRadius: 16,
        padding: 14,
        marginBottom: 10,
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "transparent"
    },

    optionSelected: {
        borderColor: "#44E8C3",
        backgroundColor: "rgba(68,232,195,0.06)"
    },

    optionIcon: {
        width: 44,
        height: 44,
        borderRadius: 12,
        backgroundColor: "rgba(68,232,195,0.10)",
        justifyContent: "center",
        alignItems: "center",
        marginRight: 12
    },

    optionContent: {
        flex: 1
    },

    optionType: {
        color: "#FFFFFF",
        fontSize: 15,
        fontWeight: "700"
    },

    optionDescription: {
        color: "#94A3B8",
        fontSize: 12,
        marginTop: 2
    },

    optionNumber: {
        color: "#64748B",
        fontSize: 11,
        marginTop: 4
    },

    optionRight: {
        alignItems: "flex-end",
        gap: 8
    },

    optionBalance: {
        color: "#44E8C3",
        fontSize: 13,
        fontWeight: "700"
    },

    empty: {
        color: "#94A3B8",
        textAlign: "center",
        paddingVertical: 30
    },

    eyeButton: {
    padding: 5,
    marginLeft: 8,
     },

     
});