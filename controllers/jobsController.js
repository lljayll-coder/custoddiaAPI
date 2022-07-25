import { writeFiles } from "../models/writeFiles.js"
import { getFiles } from "../models/getFiles.js"

const createJob = async (req, res) => {
        writeFiles(req, res)
}

const getAllJobs = async (req, res) => {
        getFiles(req, res)
}

const updateJob = async (req, res) => {
    res.send('update job')
}

const deleteJob = async (req, res) => {
    res.send('delete job')
}

const showStats = async (req, res) => {
    res.send('show stats')
}

export { createJob, getAllJobs, updateJob, deleteJob, showStats }

