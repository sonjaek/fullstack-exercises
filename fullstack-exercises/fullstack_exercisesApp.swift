//
//  fullstack_exercisesApp.swift
//  fullstack-exercises
//
//  Created by Sonja Ek on 14.11.2020.
//

import SwiftUI

@main
struct fullstack_exercisesApp: App {
    var body: some Scene {
        DocumentGroup(newDocument: fullstack_exercisesDocument()) { file in
            ContentView(document: file.$document)
        }
    }
}
