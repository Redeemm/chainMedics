// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ChainMedics {
    address public owner;

    // Define a struct to represent the patient information
    struct PatientInfo {
        string Name;
        string DateOfBirth;
        string BloodType;
        string[] Allergies;
        string[] ChronicConditions;
    }

    // Define a struct to represent the medical history
    struct MedicalRecord {
        string Condition;
        string Date;
        string Location;
    }

    // Mapping to store IPFS asset JSON objects associated with unique IDs
    mapping(uint256 => PatientInfo) private patientInfoAssets;
    mapping(uint256 => MedicalRecord[]) private medicalHistoryAssets;

    // Event to log when an IPFS asset is stored
    event PatientInfoStored(uint256 indexed id, PatientInfo patientInfo);
    event MedicalRecordStored(uint256 indexed id, MedicalRecord[] medicalRecords);

    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can perform this action");
        _;
    }

    // Function to store patient information, only accessible by the owner
    function storePatientInfo(uint256 id, PatientInfo memory patientInfoData) public onlyOwner {
        patientInfoAssets[id] = patientInfoData;
        emit PatientInfoStored(id, patientInfoData);
    }

    // Function to retrieve patient information by ID
    function getPatientInfo(uint256 id) public view returns (PatientInfo memory) {
        return patientInfoAssets[id];
    }

    // Function to store medical history, accessible by anyone
    function storeMedicalHistory(uint256 id, MedicalRecord[] memory medicalRecords) public {
        for (uint256 i = 0; i < medicalRecords.length; i++) {
            medicalHistoryAssets[id].push(medicalRecords[i]);
        }
        emit MedicalRecordStored(id, medicalRecords);
    }

    // Function to retrieve medical history by ID
    function getMedicalHistory(uint256 id) public view returns (MedicalRecord[] memory) {
        return medicalHistoryAssets[id];
    }
}
