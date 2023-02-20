package com.cc.mcts.tree;

import com.cc.mcts.treesearch.State;

import java.util.*;

public class Node {
    private final State state;
    private final List<Node> childArray;
    private final Random random = new Random();
    private Node parent;

    public Node() {
        this.state = new State();
        childArray = new ArrayList<>();
    }

    public Node(State state) {
        this.state = state;
        childArray = new ArrayList<>();
    }

    public Node(Node node) {
        this.state = node.getState();
        if (node.parent != null) this.parent = node.parent;
        this.childArray = new ArrayList<>();
        for (Node child : childArray) {
            this.childArray.add(new Node(child));
        }
    }

    public State getState() {
        return state;
    }

    public Node getParent() {
        return parent;
    }

    public void setParent(Node parent) {
        this.parent = parent;
    }

    public List<Node> getChildArray() {
        return childArray;
    }

    public Node getRandomChildNote() {
        return this.childArray.get(random.nextInt(this.childArray.size()));
    }

    public Node getChildWithMaxScore() {
        return Collections.max(this.childArray, Comparator.comparing(x -> x.getState().getVisitCount()));
    }
}
