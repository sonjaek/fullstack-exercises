//
//  ContentView.swift
//  fullstack-exercises
//
//  Created by Sonja Ek on 14.11.2020.
//

import SwiftUI

struct ContentView: View {
    @Binding var document: fullstack_exercisesDocument

    var body: some View {
        TextEditor(text: $document.text)
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView(document: .constant(fullstack_exercisesDocument()))
    }
}
